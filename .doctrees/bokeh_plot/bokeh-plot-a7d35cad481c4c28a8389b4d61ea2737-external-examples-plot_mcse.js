(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("961e6da5-1ac8-44a4-b258-9f0100aae10f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '961e6da5-1ac8-44a4-b258-9f0100aae10f' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"747f9136-990c-47d5-85b1-e22a4bed1e1b":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{},"id":"35538","type":"UnionRenderers"},{"attributes":{},"id":"35438","type":"SaveTool"},{"attributes":{"overlay":{"id":"35477"}},"id":"35472","type":"LassoSelectTool"},{"attributes":{},"id":"35473","type":"UndoTool"},{"attributes":{},"id":"35539","type":"Selection"},{"attributes":{"callback":null},"id":"35439","type":"HoverTool"},{"attributes":{},"id":"35452","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35476","type":"BoxAnnotation"},{"attributes":{},"id":"35435","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"35440"}},"id":"35434","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"35441"}},"id":"35436","type":"LassoSelectTool"},{"attributes":{},"id":"35437","type":"UndoTool"},{"attributes":{},"id":"35540","type":"UnionRenderers"},{"attributes":{},"id":"35429","type":"BasicTicker"},{"attributes":{},"id":"35425","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35477","type":"PolyAnnotation"},{"attributes":{},"id":"35541","type":"Selection"},{"attributes":{"axis":{"id":"35428"},"dimension":1,"ticker":null},"id":"35431","type":"Grid"},{"attributes":{},"id":"35474","type":"SaveTool"},{"attributes":{"callback":null},"id":"35475","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"35468"},{"id":"35469"},{"id":"35470"},{"id":"35471"},{"id":"35472"},{"id":"35473"},{"id":"35474"},{"id":"35475"}]},"id":"35478","type":"Toolbar"},{"attributes":{},"id":"35433","type":"PanTool"},{"attributes":{},"id":"35468","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35440","type":"BoxAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35517"},"major_label_policy":{"id":"35518"},"ticker":{"id":"35425"}},"id":"35424","type":"LinearAxis"},{"attributes":{"children":[[{"id":"35415"},0,0],[{"id":"35451"},0,1]]},"id":"35543","type":"GridBox"},{"attributes":{},"id":"35517","type":"BasicTickFormatter"},{"attributes":{},"id":"35518","type":"AllLabels"},{"attributes":{"data_source":{"id":"35496"},"glyph":{"id":"35495"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35498"}},"id":"35497","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35441","type":"PolyAnnotation"},{"attributes":{"source":{"id":"35487"}},"id":"35491","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35492","type":"Span"},{"attributes":{},"id":"35520","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35493","type":"Span"},{"attributes":{},"id":"35521","type":"AllLabels"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35527"},"selection_policy":{"id":"35526"}},"id":"35496","type":"ColumnDataSource"},{"attributes":{"source":{"id":"35501"}},"id":"35505","type":"CDSView"},{"attributes":{},"id":"35432","type":"ResetTool"},{"attributes":{"text":"tau"},"id":"35499","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35503","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35494","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35495","type":"Scatter"},{"attributes":{"source":{"id":"35496"}},"id":"35498","type":"CDSView"},{"attributes":{"axis":{"id":"35424"},"ticker":null},"id":"35427","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35509","type":"Scatter"},{"attributes":{},"id":"35524","type":"UnionRenderers"},{"attributes":{"end":1,"start":-0.05},"id":"35418","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35502","type":"Circle"},{"attributes":{"children":[{"id":"35545"},{"id":"35543"}]},"id":"35546","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35539"},"selection_policy":{"id":"35538"}},"id":"35501","type":"ColumnDataSource"},{"attributes":{},"id":"35525","type":"Selection"},{"attributes":{"data_source":{"id":"35510"},"glyph":{"id":"35509"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35512"}},"id":"35511","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"35432"},{"id":"35433"},{"id":"35434"},{"id":"35435"},{"id":"35436"},{"id":"35437"},{"id":"35438"},{"id":"35439"}]},"id":"35442","type":"Toolbar"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35507","type":"Span"},{"attributes":{"data_source":{"id":"35501"},"glyph":{"id":"35502"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35503"},"view":{"id":"35505"}},"id":"35504","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35506","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35488","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35489","type":"Circle"},{"attributes":{},"id":"35420","type":"LinearScale"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35531"},"major_label_policy":{"id":"35532"},"ticker":{"id":"35461"}},"id":"35460","type":"LinearAxis"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35541"},"selection_policy":{"id":"35540"}},"id":"35510","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"35454","type":"DataRange1d"},{"attributes":{},"id":"35531","type":"BasicTickFormatter"},{"attributes":{},"id":"35532","type":"AllLabels"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35534"},"major_label_policy":{"id":"35535"},"ticker":{"id":"35465"}},"id":"35464","type":"LinearAxis"},{"attributes":{"below":[{"id":"35424"}],"center":[{"id":"35427"},{"id":"35431"}],"height":500,"left":[{"id":"35428"}],"output_backend":"webgl","renderers":[{"id":"35490"},{"id":"35492"},{"id":"35493"},{"id":"35494"},{"id":"35497"}],"title":{"id":"35499"},"toolbar":{"id":"35442"},"toolbar_location":null,"width":500,"x_range":{"id":"35416"},"x_scale":{"id":"35420"},"y_range":{"id":"35418"},"y_scale":{"id":"35422"}},"id":"35415","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35456","type":"LinearScale"},{"attributes":{"text":"mu"},"id":"35513","type":"Title"},{"attributes":{},"id":"35458","type":"LinearScale"},{"attributes":{},"id":"35471","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"35442"},{"id":"35478"}],"tools":[{"id":"35432"},{"id":"35433"},{"id":"35434"},{"id":"35435"},{"id":"35436"},{"id":"35437"},{"id":"35438"},{"id":"35439"},{"id":"35468"},{"id":"35469"},{"id":"35470"},{"id":"35471"},{"id":"35472"},{"id":"35473"},{"id":"35474"},{"id":"35475"}]},"id":"35544","type":"ProxyToolbar"},{"attributes":{},"id":"35422","type":"LinearScale"},{"attributes":{},"id":"35416","type":"DataRange1d"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35508","type":"Span"},{"attributes":{},"id":"35461","type":"BasicTicker"},{"attributes":{"below":[{"id":"35460"}],"center":[{"id":"35463"},{"id":"35467"}],"height":500,"left":[{"id":"35464"}],"output_backend":"webgl","renderers":[{"id":"35504"},{"id":"35506"},{"id":"35507"},{"id":"35508"},{"id":"35511"}],"title":{"id":"35513"},"toolbar":{"id":"35478"},"toolbar_location":null,"width":500,"x_range":{"id":"35452"},"x_scale":{"id":"35456"},"y_range":{"id":"35454"},"y_scale":{"id":"35458"}},"id":"35451","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"35460"},"ticker":null},"id":"35463","type":"Grid"},{"attributes":{"source":{"id":"35510"}},"id":"35512","type":"CDSView"},{"attributes":{},"id":"35534","type":"BasicTickFormatter"},{"attributes":{},"id":"35535","type":"AllLabels"},{"attributes":{},"id":"35526","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"35544"},"toolbar_location":"above"},"id":"35545","type":"ToolbarBox"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35520"},"major_label_policy":{"id":"35521"},"ticker":{"id":"35429"}},"id":"35428","type":"LinearAxis"},{"attributes":{"axis":{"id":"35464"},"dimension":1,"ticker":null},"id":"35467","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35525"},"selection_policy":{"id":"35524"}},"id":"35487","type":"ColumnDataSource"},{"attributes":{},"id":"35527","type":"Selection"},{"attributes":{},"id":"35465","type":"BasicTicker"},{"attributes":{},"id":"35469","type":"PanTool"},{"attributes":{"data_source":{"id":"35487"},"glyph":{"id":"35488"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35489"},"view":{"id":"35491"}},"id":"35490","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35476"}},"id":"35470","type":"BoxZoomTool"}],"root_ids":["35546"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"747f9136-990c-47d5-85b1-e22a4bed1e1b","root_ids":["35546"],"roots":{"35546":"961e6da5-1ac8-44a4-b258-9f0100aae10f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
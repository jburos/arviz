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
    
      
      
    
      var element = document.getElementById("8224b281-009c-4a0c-8b7d-995783881feb");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8224b281-009c-4a0c-8b7d-995783881feb' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d4eae281-07a5-48ee-acec-b83543720087":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14989","type":"BoxAnnotation"},{"attributes":{"axis_label":"Log","formatter":{"id":"15031"},"major_label_policy":{"id":"15032"},"ticker":{"id":"14974"}},"id":"14973","type":"LinearAxis"},{"attributes":{},"id":"14982","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15042"},"selection_policy":{"id":"15041"}},"id":"15012","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"14973"}],"center":[{"id":"14976"},{"id":"14980"}],"height":500,"left":[{"id":"14977"}],"output_backend":"webgl","renderers":[{"id":"15005"},{"id":"15010"},{"id":"15015"},{"id":"15020"},{"id":"15025"},{"id":"15027"}],"title":{"id":"15028"},"toolbar":{"id":"14991"},"toolbar_location":null,"width":500,"x_range":{"id":"14965"},"x_scale":{"id":"14969"},"y_range":{"id":"14967"},"y_scale":{"id":"14971"}},"id":"14964","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15038","type":"Selection"},{"attributes":{},"id":"15034","type":"AllLabels"},{"attributes":{},"id":"15044","type":"Selection"},{"attributes":{"overlay":{"id":"14990"}},"id":"14985","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15023","type":"Circle"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15044"},"selection_policy":{"id":"15043"}},"id":"15017","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"14973"},"ticker":null},"id":"14976","type":"Grid"},{"attributes":{"toolbars":[{"id":"14991"}],"tools":[{"id":"14981"},{"id":"14982"},{"id":"14983"},{"id":"14984"},{"id":"14985"},{"id":"14986"},{"id":"14987"},{"id":"14988"}]},"id":"15049","type":"ProxyToolbar"},{"attributes":{},"id":"15039","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15024","type":"Circle"},{"attributes":{"source":{"id":"15022"}},"id":"15026","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15019","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15000","type":"FixedTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"14981"},{"id":"14982"},{"id":"14983"},{"id":"14984"},{"id":"14985"},{"id":"14986"},{"id":"14987"},{"id":"14988"}]},"id":"14991","type":"Toolbar"},{"attributes":{"source":{"id":"15007"}},"id":"15011","type":"CDSView"},{"attributes":{},"id":"14974","type":"BasicTicker"},{"attributes":{"data_source":{"id":"15012"},"glyph":{"id":"15013"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15014"},"view":{"id":"15016"}},"id":"15015","type":"GlyphRenderer"},{"attributes":{},"id":"15043","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14990","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"15017"},"glyph":{"id":"15018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15019"},"view":{"id":"15021"}},"id":"15020","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15046"},"selection_policy":{"id":"15045"}},"id":"15022","type":"ColumnDataSource"},{"attributes":{},"id":"14987","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15038"},"selection_policy":{"id":"15037"}},"id":"15002","type":"ColumnDataSource"},{"attributes":{},"id":"14981","type":"ResetTool"},{"attributes":{},"id":"14971","type":"LinearScale"},{"attributes":{"toolbar":{"id":"15049"},"toolbar_location":"above"},"id":"15050","type":"ToolbarBox"},{"attributes":{"children":[{"id":"15050"},{"id":"15048"}]},"id":"15051","type":"Column"},{"attributes":{},"id":"14986","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15004","type":"Scatter"},{"attributes":{"data_source":{"id":"15007"},"glyph":{"id":"15008"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15009"},"view":{"id":"15011"}},"id":"15010","type":"GlyphRenderer"},{"attributes":{},"id":"15031","type":"BasicTickFormatter"},{"attributes":{},"id":"14984","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15003","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15009","type":"MultiLine"},{"attributes":{"source":{"id":"15012"}},"id":"15016","type":"CDSView"},{"attributes":{"children":[[{"id":"14964"},0,0]]},"id":"15048","type":"GridBox"},{"attributes":{"axis":{"id":"14977"},"dimension":1,"ticker":null},"id":"14980","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15014","type":"Circle"},{"attributes":{"callback":null},"id":"14988","type":"HoverTool"},{"attributes":{},"id":"15033","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"15033"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15034"},"ticker":{"id":"15000"}},"id":"14977","type":"LinearAxis"},{"attributes":{},"id":"15040","type":"Selection"},{"attributes":{},"id":"15046","type":"Selection"},{"attributes":{},"id":"14969","type":"LinearScale"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15008","type":"MultiLine"},{"attributes":{"data_source":{"id":"15022"},"glyph":{"id":"15023"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15024"},"view":{"id":"15026"}},"id":"15025","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"14989"}},"id":"14983","type":"BoxZoomTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15018","type":"MultiLine"},{"attributes":{},"id":"15028","type":"Title"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15013","type":"Circle"},{"attributes":{},"id":"15037","type":"UnionRenderers"},{"attributes":{"source":{"id":"15017"}},"id":"15021","type":"CDSView"},{"attributes":{},"id":"15045","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15027","type":"Span"},{"attributes":{},"id":"15032","type":"AllLabels"},{"attributes":{},"id":"15042","type":"Selection"},{"attributes":{},"id":"15041","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"14967","type":"DataRange1d"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15040"},"selection_policy":{"id":"15039"}},"id":"15007","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15002"},"glyph":{"id":"15003"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15004"},"view":{"id":"15006"}},"id":"15005","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15002"}},"id":"15006","type":"CDSView"},{"attributes":{},"id":"14965","type":"DataRange1d"}],"root_ids":["15051"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"d4eae281-07a5-48ee-acec-b83543720087","root_ids":["15051"],"roots":{"15051":"8224b281-009c-4a0c-8b7d-995783881feb"}}];
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
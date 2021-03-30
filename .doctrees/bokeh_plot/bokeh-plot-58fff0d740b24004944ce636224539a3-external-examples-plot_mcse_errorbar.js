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
    
      
      
    
      var element = document.getElementById("e48e2811-8f9f-4887-bdbb-cf7aad33048b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e48e2811-8f9f-4887-bdbb-cf7aad33048b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"605d7a0e-f6c8-4556-aac1-7dc09ade04ea":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35694","type":"MultiLine"},{"attributes":{},"id":"35709","type":"Selection"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"35704"},"major_label_policy":{"id":"35705"},"ticker":{"id":"35665"}},"id":"35664","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35677","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"35675","type":"HoverTool"},{"attributes":{"axis":{"id":"35664"},"dimension":1,"ticker":null},"id":"35667","type":"Grid"},{"attributes":{},"id":"35665","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35689","type":"Scatter"},{"attributes":{"overlay":{"id":"35676"}},"id":"35670","type":"BoxZoomTool"},{"attributes":{},"id":"35652","type":"DataRange1d"},{"attributes":{},"id":"35669","type":"PanTool"},{"attributes":{},"id":"35668","type":"ResetTool"},{"attributes":{},"id":"35674","type":"SaveTool"},{"attributes":{},"id":"35710","type":"UnionRenderers"},{"attributes":{},"id":"35671","type":"WheelZoomTool"},{"attributes":{},"id":"35656","type":"LinearScale"},{"attributes":{"overlay":{"id":"35677"}},"id":"35672","type":"LassoSelectTool"},{"attributes":{},"id":"35673","type":"UndoTool"},{"attributes":{},"id":"35711","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35701"},"major_label_policy":{"id":"35702"},"ticker":{"id":"35661"}},"id":"35660","type":"LinearAxis"},{"attributes":{"children":[{"id":"35715"},{"id":"35713"}]},"id":"35716","type":"Column"},{"attributes":{"toolbars":[{"id":"35678"}],"tools":[{"id":"35668"},{"id":"35669"},{"id":"35670"},{"id":"35671"},{"id":"35672"},{"id":"35673"},{"id":"35674"},{"id":"35675"}]},"id":"35714","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"35660"},"ticker":null},"id":"35663","type":"Grid"},{"attributes":{"toolbar":{"id":"35714"},"toolbar_location":"above"},"id":"35715","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"35668"},{"id":"35669"},{"id":"35670"},{"id":"35671"},{"id":"35672"},{"id":"35673"},{"id":"35674"},{"id":"35675"}]},"id":"35678","type":"Toolbar"},{"attributes":{"data_source":{"id":"35692"},"glyph":{"id":"35693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35694"},"view":{"id":"35696"}},"id":"35695","type":"GlyphRenderer"},{"attributes":{"text":"sigma_a"},"id":"35697","type":"Title"},{"attributes":{},"id":"35701","type":"BasicTickFormatter"},{"attributes":{},"id":"35654","type":"DataRange1d"},{"attributes":{},"id":"35702","type":"AllLabels"},{"attributes":{"data_source":{"id":"35687"},"glyph":{"id":"35688"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35689"},"view":{"id":"35691"}},"id":"35690","type":"GlyphRenderer"},{"attributes":{"source":{"id":"35692"}},"id":"35696","type":"CDSView"},{"attributes":{"children":[[{"id":"35651"},0,0]]},"id":"35713","type":"GridBox"},{"attributes":{"source":{"id":"35687"}},"id":"35691","type":"CDSView"},{"attributes":{},"id":"35661","type":"BasicTicker"},{"attributes":{},"id":"35704","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"35693","type":"MultiLine"},{"attributes":{},"id":"35705","type":"AllLabels"},{"attributes":{"below":[{"id":"35660"}],"center":[{"id":"35663"},{"id":"35667"}],"height":500,"left":[{"id":"35664"}],"output_backend":"webgl","renderers":[{"id":"35690"},{"id":"35695"}],"title":{"id":"35697"},"toolbar":{"id":"35678"},"toolbar_location":null,"width":500,"x_range":{"id":"35652"},"x_scale":{"id":"35656"},"y_range":{"id":"35654"},"y_scale":{"id":"35658"}},"id":"35651","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"35711"},"selection_policy":{"id":"35710"}},"id":"35692","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35688","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35676","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35709"},"selection_policy":{"id":"35708"}},"id":"35687","type":"ColumnDataSource"},{"attributes":{},"id":"35658","type":"LinearScale"},{"attributes":{},"id":"35708","type":"UnionRenderers"}],"root_ids":["35716"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"605d7a0e-f6c8-4556-aac1-7dc09ade04ea","root_ids":["35716"],"roots":{"35716":"e48e2811-8f9f-4887-bdbb-cf7aad33048b"}}];
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
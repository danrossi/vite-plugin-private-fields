/**
 * Vite Plugin Private Fields Remover
 * This strips # from all fields and methods but leaves shader code alone.
 * I needed this for an outdated scrambling tool with an old parser.
 * 
 * @author danielr <danielr@electroteque.org>
 */
import type { Plugin } from 'vite';


export function vitePluginPrivateFields(): Plugin {
  return {
    name: 'vite-plugin-private-fields',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
     
      if (chunk.isEntry) {

        const regex = /#(?!version|define|pragma|if|ifdef|elif|else|endif|include)\b([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
        
        const modifiedCode = code.replace(regex, '$1');
     
        return {
          code: modifiedCode,
          map: null
        };
      }
    }
  };
}

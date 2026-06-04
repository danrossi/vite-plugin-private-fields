/**
 * Vite Plugin Private Fields Remover
 * This strips # from all fields and methods but leaves shader code alone.
 * I needed this for an outdated scrambling tool with an old parser.
 *
 * @author danielr <danielr@electroteque.org>
 */
import type { Plugin } from 'vite';
export declare function vitePluginPrivateFields(): Plugin;

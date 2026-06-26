import { PluginOption, UserConfig, ConfigEnv, UserConfigFnObject, UserConfigFnPromise, UserConfigFn } from 'vite';

interface LovableViteTanstackOptions {
    plugins?: PluginOption[];
    vite?: UserConfig;
    serverFnErrorLogger?: boolean;
    ssrErrorLogger?: boolean;
    /**
     * Options forwarded to `nitro()` from `nitro/vite`.
     *
     * Behavior:
     * - **undefined** (default): auto — nitro runs only when a Lovable context
     *   is detected (sandbox + prod-deploy build via `DEV_SERVER__PROJECT_PATH`
     *   / `LOVABLE_SANDBOX`). Users who clone their project and self-deploy
     *   on their own infra get a Vite-only build with no Cloudflare-specific
     *   bundling.
     * - **`true`**: force-on, defaulting to the `cloudflare-module` preset via
     *   Nitro's `defaultPreset` — zero-config target auto-detection
     *   (`NITRO_PRESET`, Vercel/Netlify/Cloudflare Pages) still wins.
     * - **object**: force-on, with these overrides. Set `preset`
     *   (e.g. `{ preset: "vercel" }`) to hard-pin a target from your own CI.
     * - **`false`**: skip nitro entirely.
     *
     * Inside a Lovable build the preset and output layout are forced to
     * Cloudflare; `preset`/`output`/`cloudflare` overrides apply only outside it.
     *
     * The option surface is narrow on purpose — Nitro v3 is still pre-RC, so
     * we only expose stable build-time knobs to reduce churn if
     * `NitroPluginConfig` schema changes. File an issue if you need more.
     */
    nitro?: true | {
        preset?: string;
        output?: {
            dir?: string;
            publicDir?: string;
            serverDir?: string;
        };
        cloudflare?: {
            nodeCompat?: boolean;
            deployConfig?: boolean;
        };
    } | false;
    /** Options forwarded to tanstackStart(). */
    tanstackStart?: Record<string, unknown>;
    /** Options forwarded to viteReact(). */
    react?: Record<string, unknown>;
    /** Set to false to disable automatic VITE_* env define injection. Default: true. */
    envDefine?: boolean;
    /**
     * Options for the HMR gate plugin (@lovable.dev/vite-plugin-hmr-gate).
     * Enabled by default in sandbox mode. Set to false to disable, or pass options
     * to customise behaviour. Set to true or an options object to enable outside sandbox.
     */
    hmrGate?: boolean | Record<string, unknown>;
}
declare function defineConfig(config: UserConfig): (env: ConfigEnv) => Promise<UserConfig>;
declare function defineConfig(config: Promise<UserConfig>): (env: ConfigEnv) => Promise<UserConfig>;
declare function defineConfig(config: UserConfigFnObject): (env: ConfigEnv) => Promise<UserConfig>;
declare function defineConfig(config: UserConfigFnPromise): (env: ConfigEnv) => Promise<UserConfig>;
declare function defineConfig(config: UserConfigFn): (env: ConfigEnv) => Promise<UserConfig>;
declare function defineConfig(options?: LovableViteTanstackOptions): (env: ConfigEnv) => Promise<UserConfig>;

export { type LovableViteTanstackOptions, defineConfig };

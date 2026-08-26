# Differences from wine-pure:
1. Local custom patches (controller fixes, improved EAC support, some winewayland enhancements, and minor QoL tweaks), along with custom patches from external repositories (spritz, proton-ge-custom, starcitizen-lug, gwine, wine-osu-patches).
2. Added aggressive compiler optimization flags.
3. Improved compatibility for games and applications, with attempts to enhance stability and achieve better performance.
4. Added support for anime games and THP.
5. Support for XDG Desktop Portal and its configuration in winecfg.

# New environment variables:
- GWINE_USE_THP — Enables THP support in Wine. For this to work, you must explicitly configure Linux to set THP to madvise for the enabled, shmem_enabled, and defrag parameters.
- WAYLANDDRV_PRIMARY_MONITOR — Forces the game to run on a specific monitor. Fixes certain display or mouse input issues. You need to specify your monitor's name (e.g., DP-1).
- WINE_ENABLE_TIMEOUT_FIX — Fixes network connection issues in games by overriding the timeout value (useful for Genshin Impact, Zenless Zone Zero, etc.).
- WINE_ENABLE_STEAM_STUB — Tricks games into thinking they are being launched through Steam.
- WINE_USE_WINEDMO — Forces the use of winedmo instead of GStreamer. This fixes issues with intro videos, cutscenes, and codecs, such as audio/video desynchronization.
- WINE_FORCE_PORTAL=1 - force the portal regardless of policy.
- WINEALSA_CHANNELS — Forces a specific number of audio channels for the game. Helpful if a game outputs 7.1 surround sound; it will software-downmix the audio to 5.1 or stereo, for example.
- WINEALSA_SPATIAL — Enables raw passthrough of multichannel audio streams (spatial sound) directly to the Linux audio subsystem. Useful if you are using PipeWire with HRTF audio processing.
- WINE_NO_OPEN_FILE_SEARCH — Helps when a game freezes during level loading. By default, Wine can be very slow when searching for files due to Linux filesystem specifics. This variable explicitly disables this search by pointing directly to the game's textures/assets path.
- WINE_LARGE_ADDRESS_AWARE — Enables Large Address Aware (LAA) support for 32-bit games, allowing them to use up to 4 GB of RAM instead of the default 2 GB limit. (patch also exists in wine-pure)
- EAC_LAUNCHERDIR — Enables a workaround for Easy Anti-Cheat error 60101 by creating a temporary PID file in /tmp. Set this variable to any non-empty value (e.g., the game launcher's directory) to activate the patch. This resolves timeout issues when EAC expects a wine_pid file that is not created in standard Wine. Useful for games like Apex Legends, Fortnite, and others that fail to launch with EAC error 60101 under Wine/Proton.
- STEAM_COMPAT_CLIENT_INSTALL_PATH — Unix path to the Steam client installation. Used by the steam.exe stub to locate native Steam. Set automatically by Proton.
- STEAM_COMPAT_LIBRARY_PATHS — Colon-separated Unix paths to Steam library folders. Used to generate libraryfolders.vdf inside the Wine prefix.
- SteamGameId — Steam App ID of the launched game. Enables Steam-specific features (registry, DRM, steam:// forwarding).
- WINE_UNOPENABLE_DEVICE_IS_NOT_BAD — Suppresses STATUS_BAD_DEVICE_TYPE when a file is not readable. Set to non-zero to work around RSI Launcher issues with game installs outside C:.


# The following variables are intended to improve gamepad compatibility and behavior:

- PROTON_DISABLE_HIDRAW — Disables hidraw. Typically used to fix duplicate/double controller issues.
- PROTON_PREFER_SDL — Should theoretically do the same thing by giving preference to SDL.
- PROTON_ENABLE_HIDRAW — Forcibly enables hidraw if you are sure it has been disabled.
- PROTON_DISABLE_INPUT — Completely disables the input subsystem.
- WINE_JSHID_FORCEJS — Forces a HID device (format "XXXX:YYYY") to be recognized as a joystick. Skips devices with 0 buttons. (Local patch)

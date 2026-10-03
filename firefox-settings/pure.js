// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);
pref("skipDefaultBrowserCheckOnFirstRun", false, locked);

// Don't disable extensions in the application directory
pref("extensions.autoDisableScopes", 11);

// Enable hardware acceleration
pref("media.hardware-video-decoding.force-enabled", true);
pref("media.webrtc.hw.h264.enabled", true);
pref("media.gpu-process-decoder", true);

// Performance & Graphics Tweaks
pref("browser.cache.disk.enable", false);
pref("browser.cache.memory.capacity", 1048576);
pref("gfx.canvas.accelerated.cache-items", 32768);
pref("gfx.canvas.accelerated.cache-size", 4096);
pref("gfx.content.skia-font-cache-size", 80);
pref("gfx.webrender.all", true);
pref("gfx.webrender.precache-shaders", true);
pref("gfx.webrender.program-binary-disk", true);
pref("layers.gpu-process.enabled", true); // Use dedicated GPU process

// JavaScript & Process Tweaks
pref("javascript.options.baselinejit.threshold", 50); // Lower JIT threshold
pref("javascript.options.ion.threshold", 500); // Lower Ion threshold

// Memory & Cache Tweaks (Non-Disk)
pref("image.mem.decode_bytes_at_a_time", 65536); // Increase image decode chunk size
pref("image.mem.shared.unmap.min_expiration_ms", 120000);
pref("media.cache_readahead_limit", 7200); // Increase media readahead
pref("media.cache_resume_threshold", 3600); // Increase media resume threshold
pref("media.memory_cache_max_size", 1048576); // Increase media memory cache (1GB)
pref("media.memory_caches_combined_limit_kb", 3145728); // Increase combined media caches limit (3GB)
pref("network.buffer.cache.size", 65535); // Network buffer size
pref("network.ssl_tokens_cache_capacity", 32768); // Increase SSL token cache

// Remove Mozilla stuff
pref("app.normandy.api_url", "", locked);
pref("app.normandy.enabled", false, locked);
pref("breakpad.reportURL", "", locked);
pref("browser.contentanalysis.default_result", 0, locked);
pref("browser.contentanalysis.enabled", false, locked);
pref("browser.contentblocking.report.hide_vpn_banner", true, locked);
pref("browser.contentblocking.report.lockwise.enabled", false);
pref("browser.contentblocking.report.mobile-android.url", "", locked);
pref("browser.contentblocking.report.mobile-ios.url", "", locked);
pref("browser.contentblocking.report.monitor.enabled", false);
pref("browser.contentblocking.report.proxy.enabled", false);
pref("browser.contentblocking.report.proxy_extension.url", "", locked);
pref("browser.contentblocking.report.show_mobile_app", false, locked);
pref("browser.contentblocking.report.vpn-android.url", "", locked);
pref("browser.contentblocking.report.vpn-ios.url", "", locked);
pref("browser.contentblocking.report.vpn-promo.url", "", locked);
pref("browser.contentblocking.report.vpn.url", "", locked);
pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false, locked);
pref("browser.dataFeatureRecommendations.enabled", false, locked);
pref("browser.discovery.enabled", false, locked);
pref("browser.ipProtection.enabled", false, locked);
pref("browser.ipProtection.guardian.endpoint", "", locked);
pref("browser.ipProtection.variant", "", locked);
pref("browser.ml.chat.enabled", false, locked);
pref("browser.ml.chat.page", false, locked);
pref("browser.ml.enable", false, locked);
pref("browser.ml.linkPreview.enabled", false, locked);
pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false, locked);
pref("browser.newtabpage.activity-stream.feeds.adsfeed", false, locked);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false, locked);
pref("browser.newtabpage.activity-stream.feeds.places", false, locked);
pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false, locked);
pref("browser.newtabpage.activity-stream.feeds.system.topsites", false, locked);
pref("browser.newtabpage.activity-stream.feeds.system.topstories", false, locked);
pref("browser.newtabpage.activity-stream.feeds.topsites", false, locked);
pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false, locked);
pref("browser.newtabpage.activity-stream.system.showSponsored", false, locked);
pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", 0, locked);
pref("browser.newtabpage.activity-stream.telemetry.ut.event", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled",	false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "", locked);
pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled",	false, locked);
pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false, locked);
pref("browser.newtabpage.enabled", false, locked);
pref("browser.places.interactions.enabled", false, locked);
pref("browser.privatebrowsing.vpnpromourl", "", locked);
pref("browser.promo.cookiebanners.enabled", false, locked);
pref("browser.promo.focus.enabled", false, locked);
pref("browser.promo.pin.enabled", false, locked);
pref("browser.protections_panel.infoMessage.seen", true);
pref("browser.search.visualSearch.featureGate", false, locked);
pref("browser.send_to_device_locales", "");
pref("browser.tabs.crashReporting.sendReport", false, locked);
pref("browser.tabs.groups.smart.userEnabled", false, locked);
pref("browser.uitour.enabled", false, locked);
pref("browser.uitour.url", "", locked);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.suggest.addons", false, locked);
pref("browser.urlbar.suggest.quicksuggest.fakespot", false, locked);
pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false, locked);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false, locked);
pref("browser.urlbar.suggest.quicksuggest.topsites", false, locked);
pref("browser.urlbar.suggest.trending", false, locked);
pref("browser.vpn_promo.enabled", false, locked);
pref("browser.vpn_promo.enabled", false, locked);
pref("captivedetect.canonicalURL", "", locked);
pref("cookiebanners.ui.desktop.showCallout", false);
pref("devtools.debugger.remote-enabled", false, locked);
pref("dom.private-attribution.submission.enabled", false, locked);
pref("dom.push.enabled", false, locked);
pref("dom.security.unexpected_system_load_telemetry_enabled", false, locked);
pref("extensions.abuseReport.enabled", false, locked);
pref("extensions.blocklist.enabled", false, locked);
pref("extensions.getAddons.showPane", false, locked);
pref("extensions.htmlaboutaddons.recommendations.enabled", false, locked);
pref("extensions.pocket.enabled", false, locked);
pref("extensions.webcompat-reporter.enabled", false ,locked);
pref("media.gmp-gmpopenh264.autoupdate", false, locked);
pref("signon.firefoxRelay.feature", "disabled", locked);

// Disable DRM content support
pref("browser.eme.ui.enabled", false);
pref("media.eme.enabled", false);

// Disable OpenH264 support
// Reason: Mozilla uses extremely outdated and vulnerable versions
pref("media.ffmpeg.allow-openh264", false);
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-gmpopenh264.provider.enabled", false);
pref("media.gmp-gmpopenh264.visible", false);
pref("media.webrtc.hw.h264.enabled", true);

// Remove telemetry
pref("browser.contentblocking.report.lockwise.enabled", false, locked);
pref("browser.contentblocking.report.monitor.enabled", false, locked);
pref("browser.discovery.enabled", false, locked);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.showSponsored", false, locked);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false, locked);
pref("browser.newtabpage.activity-stream.telemetry", false, locked);
pref("browser.newtabpage.activity-stream.telemetry.ut.events", false, locked);
pref("browser.newtabpage.activity-stream.trendingSearch.blockedAds", "", locked);
pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false, locked);
pref("browser.newtabpage.activity-stream.trendingSearch.variant", "", locked);
pref("browser.ping-centre.telemetry", false, locked);
pref("browser.search.serpEventTelemetryCategorization.enabled", false, locked);
pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false, locked);
pref("browser.search.update", false, locked);
pref("browser.shopping.experience2023.enabled", false, locked);
pref("browser.startup.homepage_override.mstone", "ignore", locked);
pref("browser.urlbar.addons.featureGate", false, locked);
pref("browser.urlbar.fakespot.featureGate", false, locked);
pref("browser.urlbar.mdn.featureGate", false, locked);
pref("browser.urlbar.pocket.featureGate", false, locked);
pref("browser.urlbar.weather.featureGate", false, locked);
pref("browser.urlbar.yelp.featureGate", false, locked);
pref("datareporting.healthreport.uploadEnabled", false, locked);
pref("datareporting.policy.dataSubmissionEnabled", false, locked);
pref("datareporting.usage.uploadEnabled", false, locked);
pref("extensions.addonAbuseReport.url", "", locked);
pref("extensions.getAddons.cache.enabled", false, locked);
pref("network.captive-portal-service.enabled", false, locked);
pref("network.connectivity-service.enabled", false, locked);
pref("network.traffic_analyzer.enabled", false, locked);
pref("network.trr.confirmation_telemetry_enabled", false, locked);
pref("security.certerrors.recordEventTelemetry", false, locked);
pref("toolkit.contentRelevancy.enabled", false, locked);
pref("toolkit.coverage.endpoint.base", "", locked);
pref("toolkit.coverage.opt-out", true, locked);
pref("toolkit.telemetry.archive.enabled", false, locked);
pref("toolkit.telemetry.bhrPing.enabled", false, locked);
pref("toolkit.telemetry.cachedClientID", "", locked);
pref("toolkit.telemetry.cachedProfileGroupID", "", locked);
pref("toolkit.telemetry.coverage.opt-out", true, locked);
pref("toolkit.telemetry.enabled", false, locked);
pref("toolkit.telemetry.firstShutdownPing.enabled", false, locked);
pref("toolkit.telemetry.newProfilePing.enabled", false, locked);
pref("toolkit.telemetry.server", "data:,", locked);
pref("toolkit.telemetry.shutdownPingSender.enabled", false, locked);
pref("toolkit.telemetry.unified", false, locked);
pref("toolkit.telemetry.updatePing.enabled", false, locked);

// Remove Google safebrowsing
pref("browser.safebrowsing.allowOverride", false, locked);
pref("browser.safebrowsing.blockedURIs.enabled", false, locked);
pref("browser.safebrowsing.debug", false, locked);
pref("browser.safebrowsing.downloads.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false, locked);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false, locked);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false, locked);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false, locked);
pref("browser.safebrowsing.downloads.remote.enabled", false, locked);
pref("browser.safebrowsing.downloads.remote.remote.url", "", locked);
pref("browser.safebrowsing.downloads.remote.url", "", locked);
pref("browser.safebrowsing.id", "", locked);
pref("browser.safebrowsing.malware.enabled", false, locked);
pref("browser.safebrowsing.phishing.enabled", false, locked);
pref("browser.safebrowsing.provider.google.advisoryName", "", locked);
pref("browser.safebrowsing.provider.google.advisoryURL", "", locked);
pref("browser.safebrowsing.provider.google.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google.lists", "", locked);
pref("browser.safebrowsing.provider.google.pver", 0, locked);
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google.reportURL", "", locked);
pref("browser.safebrowsing.provider.google.updateURL", "", locked);
pref("browser.safebrowsing.provider.google4.advisoryName", "", locked);
pref("browser.safebrowsing.provider.google4.advisoryURL", "", locked);
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false, locked);
pref("browser.safebrowsing.provider.google4.dataSharingURL", "", locked);
pref("browser.safebrowsing.provider.google4.gethashURL", "", locked);
pref("browser.safebrowsing.provider.google4.lists", "", locked);
pref("browser.safebrowsing.provider.google4.pver", 0, locked);
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "", locked);
pref("browser.safebrowsing.provider.google4.reportURL", "", locked);
pref("browser.safebrowsing.provider.google4.updateURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.gethashURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.lastupdatetime", 0, locked);
pref("browser.safebrowsing.provider.mozilla.lists", "", locked);
pref("browser.safebrowsing.provider.mozilla.lists.base", "", locked);
pref("browser.safebrowsing.provider.mozilla.lists.content", "", locked);
pref("browser.safebrowsing.provider.mozilla.nextupdatetime", 0, locked);
pref("browser.safebrowsing.provider.mozilla.pver", 0, locked);
pref("browser.safebrowsing.provider.mozilla.reportURL", "", locked);
pref("browser.safebrowsing.provider.mozilla.updateURL", "", locked);
pref("browser.safebrowsing.reportPhishURL", "", locked);

// Performance tweaks
pref("browser.tabs.unloadOnLowMemory", true, locked); // Unload unused tabs
pref("content.notify.interval", 100000); // page reflow timer, lower redrawn rendering timer, increases responsiveness but increase total load time
pref("network.dnsCacheExpiration", 3600); // Time DNS entries are cached in seconds.
pref("network.http.max-persistent-connections-per-server", 10); //https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
pref("network.http.max-urgent-start-excessive-connections-per-host", 5); //Number of connections that we can open beyond the standard parallelism limit defined by max-persistent-connections-per-server/-proxy to handle urgent-start marked requests
pref("network.http.pacing.requests.enabled", false); //Disable pacing requests

// Privacy hardening
pref("browser.formfill.enable", false);
pref("media.autoplay.default", 5);
pref("network.cookie.cookieBehavior.optInPartitioning", true);
pref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);
pref("network.predictor.enable-prefetch", false); // Disable speculative website loading
pref("network.predictor.enabled", false); // Disable speculative website loading
pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid"); // https://groups.google.com/a/mozilla.org/g/dev-platform/c/1vOSas0ptVQ?pli=1
pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // allow embedded social content
pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com"); // allow embedded social content

// Desktop integration
pref("widget.use-xdg-desktop-portal.file-picker", 1);

// UI/Behavior Tweaks
pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
pref("general.smoothScroll.msdPhysics.enabled", true); // Use physics-based smooth scrolling
pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
pref("general.smoothScroll.msdPhysics.regularSpringConstant", 250);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2.0"); // Ensure float format if needed
pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
pref("general.smoothScroll.currentVelocityWeighting", "1.0"); // Ensure float format if needed
pref("general.smoothScroll.stopDecelerationWeighting", "1.0"); // Ensure float format if needed
pref("mousewheel.default.delta_multiplier_y", 300); // Adjust mouse wheel scroll speed

// Feature Enablement
pref("layout.css.grid-template-masonry-value.enabled", true); // Enable CSS Masonry layout

// Дополнительная оптимизация от меня
pref("nglayout.initialpaint.delay", 5);
pref("gfx.webrender.compositor.force-enabled", true);
pref("image.cache.size", 268435456);
pref("network.buffer.cache.count", 48);
pref("network.dnsCacheEntries", 4000);
pref("gfx.webrender.layer-compositor", true);
pref("network.websocket.max-connections", 2000);
pref("network.http.keep-alive.timeout", 300);
pref("network.http.http3.recvBufferSize", 8388608);
pref("image.mem.surfacecache.max_size_kb", 4194304);
pref("browser.tabs.remote.warmup.enabled", true); 
pref("dom.ipc.forkserver.enable", true);
pref("dom.ipc.processCount.webIsolated", 8);
pref("layout.throttled_frame_rate", 1);
pref("accessibility.force_disabled", 1);
pref("network.prefetch-next", true);
pref("network.predictor.enabled", true);
pref("network.predictor.enable-hover-on-ssl", true);

// Улучшение приватности

pref("privacy.query_stripping.enabled", true);
pref("toolkit.telemetry.server_owner", "", locked);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false, locked);
pref("toolkit.telemetry.pioneer-new-studies-available", false, locked);
pref("toolkit.telemetry.dap_helper", "", locked);
pref("toolkit.telemetry.dap_leader", "", locked);
pref("toolkit.telemetry.coverage.opt-out", true, locked);
pref("toolkit.coverage.endpoint.base", "", locked);
pref("toolkit.coverage.opt-out", true, locked);
pref("datareporting.policy.dataSubmissionPolicyBypassNotification", true, locked);
pref("datareporting.policy.firstRunURL", "", locked);
pref("browser.ping-centre.log", false, locked);
pref("security.app_menu.recordEventTelemetry", false, locked);
pref("security.protectionspopup.recordEventTelemetry", false, locked);
pref("browser.newtabpage.activity-stream.impressionId", "", locked);
pref("media.video_stats.enabled", false);
pref("media.video.dropped_frame_stats.enabled", false);
pref("media.aboutwebrtc.hist.enabled", false);
pref("browser.crashReports.unsubmittedCheck.enabled", false, locked);
pref("browser.tabs.crashReporting.includeURL", false, locked);
pref("app.shield.optoutstudies.enabled", false, locked);
pref("telemetry.number_of_site_origin.min_interval", 0, locked);
pref("dom.gamepad.enabled", false);
pref("dom.gamepad.extensions.enabled", false);
pref("dom.gamepad.haptic_feedback.enabled", false);
pref("dom.vibrator.enabled", false);
pref("dom.vibrator.max_vibrate_ms", 0);

// Дополнительные параметры для аппаратного ускорения

pref("media.rdd-vpx.enabled", false);
pref("media.rdd-ffvpx.enabled", false);
pref("dom.webgpu.enabled", true);

// Увеличение плавности и доп. оптимизация

pref("general.smoothScroll.mouseWheel.durationMinMS", 80);
pref("mousewheel.min_line_scroll_amount", 10);
pref("gfx.canvas.max-size", 32767);
pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
pref("full-screen-api.transition-duration.enter", "0 0");
pref("full-screen-api.transition-duration.leave", "0 0");
pref("full-screen-api.warning.timeout", 1250);
pref("full-screen-api.warning.delay", 500);
pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
pref("browser.urlbar.maxRichResults", 6);
pref("browser.newtabpage.activity-stream.showWeather", false);
pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false);

// Оптимизация IPC

pref("dom.ipc.processCount.privilegedabout", 2);
pref("dom.ipc.processCount.privilegedmozilla", 2);
pref("dom.ipc.processPrelaunch.fission.number", 1);

// WebGL оптимизация

pref("webgl.force-enabled", true);
pref("webgl.max-contexts", 2000);
pref("webgl.max-contexts-per-principal", 600);
pref("gfx.webrender.compositor.max_update_rects", 16);
pref("gfx.webrender.max-partial-present-rects", 16);
pref("gfx.webrender.compositor.surface-pool-size", 64);
pref("gfx.webrender.batching.lookback", 40);
pref("layout.display-list.retain.sc", true);
pref("layers.gpu-process.max_restarts", 10);

// HTTP оптимизация

pref("network.http.http2.default-concurrent", 200);
pref("network.http.http2.pull-allowance", 25165824);
pref("network.http.http3.max_data", 50331648);
pref("network.http.http3.max_stream_data", 25165824);
pref("network.http.http3.cc_algorithm", 1);
pref("network.http.http3.slow_start_algorithm", 1);
pref("network.http.http3.hystart_alternative_css_baseline", true);
pref("network.http.http3.pmtud", true);
pref("network.http.http3.retry_different_ip_family", true);
pref("network.http.http3.parallel_fallback_conn_limit", 64);
pref("network.http.happy_eyeballs_enabled", true);
pref("network.http.happy_eyeballs_upgrade_enabled", true);
pref("network.http.happy_eyeballs_resolution_delay", 15);
pref("network.http.happy_eyeballs_connection_attempt_delay", 25);

// DNS оптимизация

pref("network.dnsCacheExpirationGracePeriod", 600);
pref("network.dns.resolver-thread-extra-idle-time-seconds", 120);
pref("network.dns.get-ttl", true);

// Кэш оптимизация

pref("browser.cache.memory.max_entry_size", 20480);
pref("browser.cache.disk.metadata_memory_limit", 2048);
pref("image.mem.surfacecache.min_expiration_ms", 600000);
pref("media.cache_size", 1024000);
pref("network.ssl_tokens_cache_records_per_entry", 20);
pref("network.ssl_tokens_cache_persistence", true);
pref("network.buffer.default_size", 131072);

// Улучшение плавности

pref("nglayout.initialpaint.delay_in_oopif", 0);
pref("layout.frame_rate", -1);
pref("layout.idle_period.required_quiescent_frames", 1);
pref("network.http.tailing.urgency", 6);

// Оптимизация сессий
pref("browser.sessionstore.interval", 60000);
pref("browser.sessionstore.max_tabs_undo", 10);
pref("browser.sessionstore.max_windows_undo", 3);

// Javascript оптимизация
pref("javascript.options.blinterp.threshold", 5);
pref("javascript.options.ion.frequent_bailout_threshold", 10);
pref("javascript.options.inlining_bytecode_max_length", 200);
pref("javascript.options.concurrent_multiprocess_gcs.cpu_divisor", 2);
pref("javascript.options.mem.nursery.max_kb", 65536);
pref("javascript.options.mem.nursery.min_kb", 4096);
pref("javascript.options.mem.gc_allocation_threshold_mb", 100);
pref("javascript.options.mem.gc_incremental_slice_ms", 10);
pref("javascript.options.mem.gc_max_parallel_marking_threads", 8);

// Изменение звуковой подсистемы
pref("media.cubeb.backend", "alsa");

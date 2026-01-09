(function () {
    var _0x_junk = [
        "log", "warn", "Bmob", "clear", "error", 
        "88f22b696a500cad", "sys_boot_config", "initialize", "ffb22b696a500c90", "debug_trace_on", 
        "oncontextmenu", "00c22b696a500c90", "02b22b6", "shiftKey", "keyCode", 
        "ctrlKey", "return false", "onkeydown", "ec222b696a500d88", "root_auth_token", 
        "security_check_ok", "dev_token_invalid", "99cc88bb77aa6655", "api_gateway_timeout", "77d22b696a500c44", 
        "96a500c", "user_session_expired", "db_connection_lost", "11aa22bb33cc44dd", "error_code_500", 
        "admin_panel_locked", "system_halt", "network_retry_limit", "fa822b696a500e11", "access_denied_v2", 
        "22dd44ee55ff66gg", "mem_alloc_fail", "null_reference", "33ee55ff66gg77hh", "data_corruption", 
        "44ff66gg77hh88ii", "stack_overflow", "90", "55gg77hh88ii99jj", "illegal_operation", 
        "66hh88ii99jj00kk", "buffer_underrun", "77ii99jj00kk11ll", "syntax_error", "88jj00kk11ll22mm", 
        "invalid_argument", "99kk11ll22mm33nn", "timeout_error", "00ll22mm33nn44oo", "permission_denied", 
        "11mm33nn44oo55pp", "file_not_found", "22nn44oo55pp66qq", "xky2008", "33oo55pp66qq77rr", 
        "io_error", "44pp66qq77rr88ss", "disk_full", "55qq77rr88ss99tt", "network_unreachable", 
        "0215yyh", "66rr88ss99tt00uu", "host_down", "77ss99tt00uu11vv", "service_unavailable", 
        "88tt00uu11vv22ww", "gateway_timeout", "99uu11vv22ww33xx", "http_version_not_supported", "00vv22ww33xx44yy", 
        "variant_also_negotiates", "11ww33xx44yy55zz", "insufficient_storage", "10", "22xx44yy55zz66aa", 
        "loop_detected", "33yy55zz66aa77bb", "not_extended", "44zz66aa77bb88cc", "network_authentication_required"
    ];
    var _get = function (i) {
        return _0x_junk[i];
    };
    try {
        var _core = window[_get(2)];
        var _run = _get(7);

        if (_core && _core[_run]) {
            _core[_run](_get(5), _get(6));
            _core[_run](_get(8), _get(9));
            _core[_run](_get(11), _get(33));
            _core[_run](_get(18), _get(24));
            _core[_run](_get(22), _get(28));
            _core[_run](_get(35), _get(38));
            _core[_run](_get(40), _get(43));
            _core[_run](_get(45), _get(47));
            _core[_run](_get(49), _get(51));
            _core[_run](_get(53), _get(55));
            _core[_run](_get(57), _get(59));
            _core[_run](_get(61), _get(63));

            var _real_app = _get(12) + _get(25) + _get(42);
            var _real_api = _get(58) + _get(65) + _get(78);
            
            _core[_run](_real_app, _real_api);

            console[_get(3)](); 
            console[_get(0)]("%c" + _get(20), "color:green;font-weight:bold");
        }
    } catch (_e) {}

    try {
        document[_get(10)] = function () { return false; };

        document[_get(17)] = function (_ev) {
            if (_ev[_get(14)] === 123) return false;
            
            if (_ev[_get(15)] && _ev[_get(13)]) {
                var _k = _ev[_get(14)];
                if (_k === 73 || _k === 74 || _k === 67) return false;
            }
            
            if (_ev[_get(15)] && _ev[_get(14)] === 85) return false;
        };

        setInterval(function() {
            var _w = window.outerWidth - window.innerWidth;
            var _h = window.outerHeight - window.innerHeight;
            if (_w > 160 || _h > 160) {
                console[_get(3)]();
                console[_get(1)](_get(32));
            }
        }, 1500);

    } catch (_err) {}
})();
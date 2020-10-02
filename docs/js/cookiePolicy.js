class cookiePolicy {
    static modal = document.getElementById("cookiePolicy");
    static cookie = "mybeer.recipes.privacy=";
    static externalScripts = externalScripts;

    static decline() {
        let inputs = this.modal.getElementsByTagName("INPUT");

        for (const e of inputs) {
            e.checked = false;
        }

        cookiePolicy.accept();
    }

    static accept() {
        let state = "";
        let inputs = this.modal.getElementsByTagName("INPUT");

        let types = [];
        for (const e of inputs) {
            if (e.checked) {
                state += e.value + ","
                types.push(e.value);
            }
        }

        let d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = this.cookie + state + ";" + expires + "; path=/; SameSite=Strict";


        this.modal.style.display = "none";

        cookiePolicy._refreshScript(types);
    }

    static init() {
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(this.cookie) == 0) {
                this.modal.style.display = "none";
                let cookie = c.substring(name.length, c.length);
                let values = cookie.substr(cookie.indexOf("=") + 1).split(",");
                let types = [];
                for (const value of values) {
                    if (value == "") {
                        continue;
                    }
                    types.push(value);
                }
                cookiePolicy._refreshScript(types);
                return;
            }
        }

        this.modal.style.display = "block";
    }

    static _refreshScript(types) {
        for (const t of types) {
            let scripts = this.externalScripts[t];
            for (const script of scripts) {
                cookiePolicy._dynamicallyLoadScript(script);
            }
        }
    }

    static _dynamicallyLoadScript(item) {
        var script = document.createElement("script");
        script.src = item.src;
        if (item.crossorigin != null) {
            script.setAttribute("crossorigin", item.crossorigin);
        }
        script.async = item.async;
        document.head.appendChild(script);
    }

    static _staticConstructor = function () {
        cookiePolicy.init();
    }();
}
routes = [{
        path: "/",
        url: "./index.html"
    },
    {
        path: "/list/",
        component: "./screens/list.html",
        isTrusted: true
    }
];
// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    touch: {
        // Enable fast clicks
        fastClicks: true,
    },
    statusbar: {
        enable: false
    },
    dialog: {
        title: 'QToken'
    },
    root: "#app", // App root element
    id: "com.freshnear.app", // App bundle ID
    name: "Fresh&Near", // App name
    theme: "ios", // Automatic theme detection
    routes: routes
});

// Init/Create main view
var mainView = app.views.create(".view-main", {
    url: "/"
});

function renderTemplateToHolder(template, holder, data) {
    var ui_template = $$(template).html();
    var compiled_template = Template7.compile(ui_template);
    var html_code = compiled_template(data);
    $$(holder).html(html_code);
}

function loadScreen(path) {
    mainView.router.navigate(path);
}

function goBack() {
    mainView.router.back();
}


function showToast(message, position) {
    if (!position) position = "top";
    var toastCenter = app.toast.create({
        text: message,
        position: position,
        closeTimeout: 2000
    });
    toastCenter.open();
}

$$("#enter-queue").click(function () {
    var saved_requests = localStorage.getItem("saved_requests");
    if (saved_requests && saved_requests != '') {
        saved_requests = JSON.parse(saved_requests);
    } else {
        saved_requests = [];
    }
    var new_request = app.form.convertToData('#qform');
    let now = new Date().getTime();
    new_request.request_id = "id-" + now;
    new_request.created_at = now;
    saved_requests.push(new_request);
    localStorage.setItem("saved_requests", JSON.stringify(saved_requests));
    //alert(JSON.stringify(formData));
    loadScreen("/list/");
    showToast("Request saved to queue", "bottom");
});
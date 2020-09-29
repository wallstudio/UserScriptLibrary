injectXHR = function(action)
{
    let base_open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password)
    {
        try
        {
            arguments = action(url, arguments);
        }
        catch(e)
        {
            console.error(e);
        }
        base_open.apply(this, arguments);
    };
    console.log("Injected XHR " + action);
};

injectFetch = function(action)
{
    let base_fetch = fetch;
    fetch = function(input, init)
    {
        try
        {
            let url = input ? input.url : "";
            arguments = action(url, arguments);
        }
        catch(e)
        {
            console.error(e);
        }
        return base_fetch.apply(null, arguments);
    };
    console.log("Injected Fetch " + action);
};

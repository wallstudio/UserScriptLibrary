injectXHR = function(awaitableAction)
{
    let base_open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = async function(method, url, async, user, password)
    {
        const _args = await awaitableAction(url, arguments);
        base_open.apply(this, _args);
    };
    console.log("Injected XHR " + awaitableAction);
};

injectFetch = function(awaitableAction)
{
    let base_fetch = fetch;
    fetch = async function(input, init)
    {
        let url = input ? input.url : "";
        const _args = await awaitableAction(url, arguments);
        return base_fetch(_args[0], _args[1]);
    };
    console.log("Injected Fetch " + awaitableAction);
};

injectXHR = function(action)
{
    let base_open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, async, user, password)
    {
        return action(url, arguments, _args => base_open.apply(this, _args));
    };
};
console.log("XhrFetchInjection prepared injectXHR");

injectFetch = function(action)
{
    let base_fetch = fetch;
    fetch = function(args)
    {
        return action(args.url, args, _args => base_fetch(_args));
    };
};
console.log("XhrFetchInjection prepared injectFetch");

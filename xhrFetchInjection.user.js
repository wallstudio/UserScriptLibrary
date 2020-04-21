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
    fetch = function(input, init)
    {
        let url = input ? input.url : "";
        return action(url, arguments, _args => base_fetch(_args[0], _args[1]));
    };
};
console.log("XhrFetchInjection prepared injectFetch");

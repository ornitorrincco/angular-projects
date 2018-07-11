let message;
message  = 'abc';
//tells to typescripts compiler what to do with any type (let message as typt any)
let endsWithC = (<string>message).endsWith('c');
let endsWithC = (message as string).endsWith('c');

# Cookie Tray

A very simple and small (<300b) library for serializing and deserializing cookies.

## Usage

```ts
import cookie from 'cookie-tray';
// import { parse, stringify } also works

cookie.parse('cookies=fun; something=else'); // { cookies: 'fun', something: 'else' }
cookie.parse(document.cookie);

cookie.stringify({ cookies: 'fun', something: 'else' }); // cookies=fun; something=else
```

You can feed these values directly into the `Cookie` and `Set-Cookie` headers.

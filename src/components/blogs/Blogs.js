import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const Blogs = () => {
  const {user, createUser} = useContext(AuthContext);
  console.log(user, createUser)
  return (
    <div className="p-5">
      <h2>What is Cors?</h2>
      <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
        that allows a server to indicate any origins (domain, scheme, or port)
        other than its own from which a browser should permit loading resources.
        CORS also relies on a mechanism by which browsers make a "preflight"
        request to the server hosting the cross-origin resource, in order to
        check that the server will permit the actual request. In that preflight,
        the browser sends headers that indicate the HTTP method and headers that
        will be used in the actual request. An example of a cross-origin
        request: the front-end JavaScript code served from https://domain-a.com
        uses XMLHttpRequest to make a request for
        https://domain-b.com/data.json. For security reasons, browsers restrict
        cross-origin HTTP requests initiated from scripts. For example,
        XMLHttpRequest and the Fetch API follow the same-origin policy. This
        means that a web application using those APIs can only request resources
        from the same origin the application was loaded from unless the response
        from other origins includes the right CORS headers.
      </p>

      <h2>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h2>
      <p>
        Most apps need to know the identity of a user. Knowing a user's identity
        allows an app to securely save user data in the cloud and provide the
        same personalized experience across all of the user's devices. Firebase
        Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more. Firebase
        Authentication integrates tightly with other Firebase services, and it
        leverages industry standards like OAuth 2.0 and OpenID Connect, so it
        can be easily integrated with your custom backend. When you upgrade to
        Firebase Authentication with Identity Platform, you unlock additional
        features, such as multi-factor authentication, blocking functions, user
        activity and audit logging, SAML and generic OpenID Connect support,
        multi-tenancy, and enterprise-level support.
      </p>

      <h2>How does private route works?</h2>
      <p>
        Private Routes vary based on the Apps, For example, Dashboard, User
        Profile, App Settings, Home etc. In simple words, These routes can be
        accessed only after login. The constraints for Public and Private routes
        are that Public routes should not be accessed after login and Private
        routes should not be accessible before login. In this article, we can
        see. How to create public and private routes using react-router for your
        react apps.As you can see in the above code, The Public route component
        receives 3 props like children, isAuthenticated and …rest . If the user
        is authenticated, He will be redirected to the Home screen and he can
        only access the public routes if he is not authenticated(Logged in).The
        private route component is similar to the public route, the only change
        is that redirect URL and authenticate condition. If the user is not
        authenticated he will be redirected to the login page and the user can
        only access the authenticated routes If he is authenticated (Logged in).
      </p>

      <h2>What is Node? How does Node work?</h2>
      <p>
        Scalability, latency, and throughput are key performance indicators for
        web servers. Keeping the latency low and the throughput high while
        scaling up and out is not easy. Node.js is a JavaScript runtime
        environment that achieves low latency and high throughput by taking a
        “non-blocking” approach to serving requests. In other words, Node.js
        wastes no time or resources on waiting for I/O requests to return. In
        the traditional approach to creating web servers, for each incoming
        request or connection the server spawns a new thread of execution or
        even forks a new process to handle the request and send a response.
        Conceptually, this makes perfect sense, but in practice it incurs a
        great deal of overhead. While spawning threads incurs less memory and
        CPU overhead than forking processes, it can still be inefficient. The
        presence of a large number of threads can cause a heavily loaded system
        to spend precious cycles on thread scheduling and context switching,
        which adds latency and imposes limits on scalability and throughput.When
        Node.js was created, the de facto standard for JavaScript modules was
        CommonJS, which is what NPM originally supported. Since then, the
        ECMAScript committee officially blessed ES Modules (ESM), which is
        supported by the JSPM package manager. Deno (discussed in the next
        section) also supports ES Modules. Experimental support for ES Modules
        was added in Node.js 12.12 and is stable from Node.js 16 forward.
        TypeScript (a strongly typed superset of JavaScript) also supports ES
        Modules for Node.js 16, starting with TypeScript 4.7. The way to load a
        CommonJS module in JavaScript is to use the require statement. The way
        to load an ECMA Script Module is to use an import statement; the module
        must contain a matching export statement. The latest Node.js has both
        CommonJS and ES Module loaders. How are they different? The CommonJS
        loader is fully synchronous. It’s responsible for handling require()
        calls, supports folders as modules, and tries adding extensions (.js,
        .json, or .node) if one was omitted from the require() call. The
        CommonJS loader cannot be used to load ES Modules. The ECMAScript Module
        loader is asynchronous. It’s responsible for handling both import
        statements and import() expressions, does not support folders as modules
        does not search for extensions, and accepts only .js, .mjs, and .cjs
        extensions for JavaScript text files. ES Modules can be used to load
        JavaScript CommonJS modules.
      </p>
    </div>
  );
};

export default Blogs;

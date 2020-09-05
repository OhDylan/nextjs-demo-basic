# How easy it is to start setting up a simple blog with Next.js (Server-side Rendering Framework for React)?

If you are not familiar with the background of Next.js and what it is used for, let me give you a brief on that.

We all know that React library (or you want to call it framework) is extremely popular for client-side web development which gives users a seamless browsing experience to your website as a single page application (SPA). However you might want to render your React app over at server side for reasons below:
1. Improve the speed of initial loading for your web app (especially when it grows larger)
2. Enhance SEO (Search Engine Optimisation) ranking potential, which crawler could only see the empty div tag for your client-side rendering app
3. Good for pre-rendered static website

Next.js, the server-side rendering framework of React could provide you the best of both worlds. It becomes even more convenient when it came out with create-next-app in Oct 2019. This article is for demonstration purpose, you may read up more on their official docs site (https://nextjs.org/learn/basics/create-nextjs-app).

In order to write Javascript at server side, you would need to have Node.js (version 10.13 or later) installed.
Type in the command below to create a Next.js project:
```
npx create-next-app demo-for-next
```
After finished installing the packages, cd into your app directory and open up with a code editor (I shall use vscode for this demo).

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/0niyv1chh3gs4uismwh2.png)

This is the by default files structure that you will get. Normally I would add a "components" folder to store my .jsx file for React components, but let's stick to this file structure for this demo.

There is a folder called "pages" was created and some files had been included in this folder (index.js, _app.js, api>hello.js). Each of the .js file here represents an endpoint of your web app (except _app.js, it is a customizable app component where it is by default to initialize your pages into their respective endpoints, we shall talk about this as a separate topic and see how we can make use of this in the future). index.js will automatically be your root route ("/"), and you are able to nest the route by putting the js file ("hello.js") into a folder("api"), and the endpoint will be "/api/hello". This is incredibly convenient to setup different routes, just by building each page (the file name will be the path name, just without ".js"). 

You may start the dev server by typing "npm run dev" in your terminal, and simply go to your localhost:3000 to check out the pre-built pages by Next.js. You should land on the root path which shows you the content in index.js and you may navigate to route /api/hello to see the content of hello.js.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/97pa2c63ysp0515jgbum.png)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ti3wv2awui9boszhe1lg.png)

Let's get started to build our very simple blog example. Open the "index.js" under "pages" folder. We are going to modify the root path content to our sample blog home page. I just did a simple one with the existing styles by Next.js.
```javascript
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Little Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Blog
        </h1>
        <div className={styles.grid}>
          <Link href="./blog1">
            <a className={styles.card}>
              <h3>Blog 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vehicula felis eget feugiat. Nullam mattis feugiat massa, id consectetur dolor pellentesque eget. Praesent non varius est, at rutrum nisl. Maecenas feugiat vitae quam et imperdiet. Nam vulputate volutpat metus, mollis faucibus nisi eleifend ac. Integer egestas libero odio, eget ultrices leo condimentum eu.</p>
            </a>
          </Link>

          <Link href="./blog2">
            <a className={styles.card}>
              <h3>Blog 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vehicula felis eget feugiat. Nullam mattis feugiat massa, id consectetur dolor pellentesque eget. Praesent non varius est, at rutrum nisl. Maecenas feugiat vitae quam et imperdiet. Nam vulputate volutpat metus, mollis faucibus nisi eleifend ac. Integer egestas libero odio, eget ultrices leo condimentum eu.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
```

Notice that I import the Link from "next/link". This is a useful feature where you can perform client side routing for this server side rendered app. This means that our app doesn't have to make request to server everytime when user changes the URL or endpoint path. Just use the <Link> tag to wrap around the html element ( a tag in this case) that you want to navigate to destination, Next.js will do the job for you. In this case, we want to navigate to each blog post page from our home page.

Next we shall be creating our two blog posts, just for demonstration purpose and we shall talk about how to make our app dynamic with Next.js in the future.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/1oka028fhos7rmki5oba.png)

```javascript
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Blog1(){
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>HELLO, THIS IS BLOG 1</h1>
            <p className={styles.card} style={{width: "50%"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat vehicula felis eget feugiat. Nullam mattis feugiat massa, id consectetur dolor pellentesque eget. Praesent non varius est, at rutrum nisl. Maecenas feugiat vitae quam et imperdiet. Nam vulputate volutpat metus, mollis faucibus nisi eleifend ac. Integer egestas libero odio, eget ultrices leo condimentum eu. Vestibulum quis accumsan enim. Aenean sed justo tortor. Duis tincidunt elit ut vulputate commodo. Maecenas at laoreet felis, quis euismod quam. Nulla at nibh sit amet ipsum tincidunt lacinia ac eu mauris.

                Nam ornare congue egestas. In sed urna convallis, efficitur mauris et, eleifend sem. Vivamus a tempus risus. Donec dignissim nec arcu vel laoreet. Aenean ultrices porta diam. Duis vel eros vehicula, ornare felis eu, eleifend diam. Praesent sit amet erat sed libero feugiat molestie ut nec felis.
                
                Vivamus laoreet ex sed ligula vestibulum congue. Pellentesque porttitor tellus ut odio pulvinar sagittis. Morbi viverra tristique dignissim. Proin interdum luctus semper. Nulla at pulvinar orci. Curabitur sed dapibus sem. Mauris rhoncus aliquam felis sit amet feugiat. Curabitur tincidunt facilisis semper.
                
                Etiam sit amet risus et orci tincidunt posuere. Integer fermentum pellentesque velit nec venenatis. Etiam eleifend laoreet rhoncus. Aenean cursus tortor neque, in varius eros hendrerit quis. Maecenas eu porttitor eros. Integer quis fringilla mauris. Morbi pulvinar mattis justo a elementum. Phasellus aliquam auctor orci sit amet hendrerit. In ante nisl, pretium vitae volutpat et, semper nec ex. Phasellus leo arcu, congue eu convallis nec, varius quis sem. Quisque sodales neque blandit massa mollis bibendum. Cras nec molestie velit. Nullam vel consequat libero, non porta ipsum. Sed sit amet libero mi. Etiam iaculis ipsum sed porttitor gravida. Duis nec pretium ante.
                
                Sed ullamcorper accumsan mi, at dignissim dolor vestibulum in. Quisque diam orci, congue in sagittis a, dapibus et odio. Praesent convallis augue non fringilla maximus. Aliquam varius ipsum ac cursus tempus. Donec lacus purus, tincidunt id ultrices ut, sollicitudin sit amet erat. Curabitur a gravida lorem, id feugiat orci. Curabitur ut pretium nulla, at pulvinar libero. Aliquam blandit neque blandit felis interdum, sed dictum ligula porttitor. Mauris condimentum ut massa in placerat. Suspendisse rhoncus finibus leo ut sagittis. Cras quis odio nec ante gravida viverra ut ac dui. Nunc tristique dictum metus vitae pharetra. Vivamus in leo vel urna sagittis efficitur sit amet a ante. Nulla pellentesque malesuada imperdiet. Phasellus non lacus consectetur, lobortis orci ac, gravida nisl. Vivamus eget lobortis elit.
            </p>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
        );
}
```

```javascript
import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Blog2(){
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>HELLO, THIS IS BLOG 2</h1>
            <p className={styles.card} style={{width: "50%"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget mauris lectus. Proin pulvinar ipsum id augue efficitur, vel imperdiet magna ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. In id nisi velit. Donec commodo blandit orci in gravida. Mauris non purus vel erat ornare bibendum porttitor a elit. Nullam maximus neque tortor, non lobortis felis posuere eu. Praesent orci turpis, pulvinar sit amet dolor at, viverra sollicitudin erat.

                Integer aliquam ornare mauris sed sagittis. Aenean interdum lectus consectetur elementum dapibus. Pellentesque non ipsum imperdiet, commodo elit sed, ornare purus. Sed lacus ipsum, tempor at elementum rhoncus, tempor ac nisi. Morbi tellus ex, malesuada aliquet ultrices a, aliquam eu erat. Nulla rhoncus et orci at scelerisque. Donec dignissim ac nibh ac varius.

                Nulla mollis lacinia urna nec feugiat. Mauris libero ipsum, eleifend quis dolor ac, vulputate porta odio. Suspendisse semper felis nec elementum elementum. Maecenas placerat lorem eget odio mattis finibus. Etiam auctor mauris eget massa tristique, non luctus leo suscipit. In egestas mauris in lectus facilisis, porta semper felis lobortis. Suspendisse elit nibh, euismod et velit id, ornare accumsan massa. Donec ut ante in nunc ornare gravida. In dictum urna sed laoreet sollicitudin. Duis vel scelerisque neque, vitae dapibus tellus. Curabitur volutpat libero a interdum porttitor. Praesent purus est, consectetur iaculis convallis ut, congue fringilla est. Maecenas venenatis risus lectus, a pellentesque magna ullamcorper ac. Nulla tempus et metus et dictum. Aenean neque metus, fringilla et condimentum sit amet, aliquam sed ipsum.

                In a ipsum egestas, congue nulla nec, dictum nisi. Ut libero urna, posuere eget ipsum sed, tempus commodo metus. Ut cursus enim id ex cursus, eget laoreet mi sodales. Proin nulla turpis, consequat vitae ultrices eget, suscipit non libero. Aliquam porttitor varius sem in pellentesque. Vivamus volutpat neque erat, a ullamcorper tortor ullamcorper eu. Duis a magna pulvinar, imperdiet ligula sit amet, pharetra urna. Nam lobortis lectus at velit ultricies, sit amet pellentesque sapien cursus. Donec posuere ex tellus, at auctor enim aliquam eget. Duis iaculis lorem vitae efficitur pretium. In sit amet quam egestas, dapibus quam vel, placerat lacus. Integer ut commodo felis. Aliquam tristique ex eu quam tincidunt suscipit. Fusce porta blandit urna. Vestibulum quis porta nibh, at dictum odio. Sed ut pulvinar quam.

                Vivamus ultrices, sem ut lacinia pellentesque, nibh sem posuere orci, in aliquam nisi enim id tellus. Quisque elementum laoreet lectus in gravida. Morbi vitae egestas libero. Cras erat dolor, faucibus sed leo eget, lobortis pharetra leo. Aenean nec sapien lorem. Ut facilisis mauris quam, at commodo diam ultricies ut. Nam eget lectus vitae nulla sagittis porttitor non at ligula. Aenean porta est vitae mi pulvinar scelerisque. Ut vel orci tellus. Aenean tincidunt quis elit ut porttitor. Suspendisse nisi nisi, sodales at ante at, efficitur consequat mi.

                Curabitur tempus cursus nulla quis cursus. Morbi pretium fringilla posuere. Nullam tristique ex at justo ornare elementum. Vestibulum blandit quis urna eget gravida. Sed dapibus hendrerit ante, a dictum diam maximus sed. Vivamus accumsan odio et finibus varius. Pellentesque fringilla erat purus. Sed lacinia purus in consectetur consequat. Donec nec blandit neque. Quisque lobortis rutrum quam ac pulvinar. Nunc semper tempus lectus, consequat eleifend nunc feugiat quis. Sed volutpat erat a mauris auctor vulputate. Vestibulum ipsum ligula, porttitor eu massa convallis, scelerisque consequat massa.

                Cras non condimentum risus, quis sollicitudin neque. Vivamus aliquet hendrerit urna vel tincidunt. Praesent tristique scelerisque tristique. Vivamus risus dui, ornare non lobortis ut, pharetra ullamcorper tellus. Nunc quis urna egestas, accumsan mauris eget, sodales metus. Fusce nec dignissim purus. Suspendisse ultrices pretium tellus, ultrices efficitur lorem semper eu. Quisque laoreet, lorem placerat scelerisque feugiat, ante felis pulvinar libero, id pharetra turpis eros ut nisi. Etiam dictum nulla at lectus rhoncus condimentum. Phasellus a quam augue. Nullam ornare nisi eget elit rhoncus sagittis.
            </p>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
        );
}
```
Click on the link (Back to home) to navigate around and you will realise that the refresh button will not "flick" which means the page is not re-rendered, just like React.

That's it for this demonstration, we shall talk about more in depth topics on Next.js, such as dynamic routing, getInitialProps and etc in the future articles.

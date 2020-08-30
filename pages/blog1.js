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
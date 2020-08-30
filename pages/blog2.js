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
import Link from 'next/link';

const LessonLink = props => (
  <Link as={`/lesson/${props.id}`} href={`/lesson?id=${props.id}`}>
    {props.children}
  </Link>
);

export default LessonLink;

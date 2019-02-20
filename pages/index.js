import Layout from './../components/Layout';
import Link from 'next/link';
import 'graphiql-material-theme';

const lessons = [
  { id: '01-graphql-query-basics', title: 'GraphQL Queries' },
  { id: '02-querying-subfields', title: 'GraphQL Subfields' },
  { id: '03-getting-a-list-of-data', title: 'GraphQL Lists' }
];

const LessonLink = props => (
  <Link as={`/lesson/${props.id}`} href={`/lesson?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>
);

const Index = () => (
  <div>
    <Layout>
      <p>Hello Next.js</p>
      {lessons.map((l, k) => (
        <LessonLink id={l.id} title={l.title} key={k} />
      ))}
    </Layout>
  </div>
);

export default Index;

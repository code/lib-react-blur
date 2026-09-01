import { MainHeader, Text, Space, Container, A, CodeSnippet, MoreExperiments } from 'jbx';

import BlurApp from '@/components/BlurApp.jsx';

const exampleCode = `
// pnpm add react-blur
import Blur from 'react-blur'
[...]
<Blur blurRadius={5} img={'path.jpg'} />
`.trim();

export default function Page() {
  return (
    <Container>
      <MainHeader>react-blur</MainHeader>
      <Space h={1} />
      <Text>
        React component for creating blurred backgrounds using canvas.
      </Text>

      <BlurApp />

      <Space h={1} />
      <Text>How to use:</Text>
      <Space h={1} />
      <CodeSnippet>{exampleCode}</CodeSnippet>

      <Space h={2} />
      <Text>
        For more information see the{' '}
        <A href="https://github.com/javierbyte/react-blur">github repo</A>.
      </Text>

      <Space h={2} />
      <MoreExperiments exclude="react-blur" />

      <Space h={2} />
      <Text>
        Made by <A href="https://javier.xyz">Javier Bórquez</A>. Online since
        2015.
      </Text>
    </Container>
  );
}

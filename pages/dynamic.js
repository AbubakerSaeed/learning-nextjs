import dynamic from "next/dynamic";

import Head from '../components/Head';
import { H1 } from '../components/Headings';


const DynamicComponent = dynamic({
  loader: () => import("../components/DynamicHello"),
  loading: () => <p>I'm Loading.</p>
});

const DynamicComponentNamedExport1 = dynamic({
  loader: () => import("../components/DynamicFunctions").then(mod => mod.Hey),
  loading: () => <p>I'm Loading.</p>
});

const DynamicComponentNamedExport2 = dynamic({
  loader: () => import("../components/DynamicFunctions").then(mod => mod.Bye),
  loading: () => <p>I'm Loading.</p>
});

const DynamicComponentNamedExportNoSSR = dynamic({
  loader: () => import("../components/DynamicFunctions").then(mod => mod.noSSR),
  loading: () => <p>I'm Loading.</p>,
}, {ssr: false});

export default () => (

  <>
    <Head title="Dynamic (import) Page"/>
    <H1 heading="Title 4" />

    <DynamicComponent/>
    <DynamicComponentNamedExport1/>
    <DynamicComponentNamedExport2/>
    <DynamicComponentNamedExportNoSSR/>
  </>

)
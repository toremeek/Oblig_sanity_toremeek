import BlockContent from "@sanity/block-content-to-react";

const SanityContent = ({ data }) => <BlockContent block={data || []} />


export default SanityContent;
/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
};

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withAnalyzer(nextConfig); // Exporta usando export default

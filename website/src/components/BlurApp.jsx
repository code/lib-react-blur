'use client';

import { useState } from 'react';

import { Text, Space, Range, Box } from 'jbx';

import ReactBlur from 'react-blur';

import { BASE_PATH } from '@/lib/basePath.js';

// react-blur is published as babel 6 CJS, which marks `__esModule` with a
// defineProperty call that bundlers don't reliably detect, so the default
// import can arrive wrapped one level deep.
const Blur = ReactBlur.default || ReactBlur;

export default function BlurApp() {
  const [blurSrc, blurSet] = useState(16);

  const blur = Math.max(blurSrc, 0);

  return (
    <>
      <Space h={2} />

      <Blur
        img={`${BASE_PATH}/example-kyoto.jpg`}
        blurRadius={blur}
        enableStyles
        style={{
          height: 'min(calc(100vmin - 48px), 350px)',
          width: 'min(calc(100vmin - 48px), 350px)'
        }}
      />
      <Box flex={1} padding={[1, 0]} style={{ maxWidth: 400 }}>
        <Text>
          Amount of blur <span style={{ color: '#666' }}>{blur}px</span>
        </Text>
        <Space h={1} />
        <Range
          aria-label="Amount of blur"
          type="range"
          value={blurSrc}
          onChange={(e) => blurSet(Number(e.target.value))}
          step={1}
          min={0}
          max={64}
        />
      </Box>
    </>
  );
}

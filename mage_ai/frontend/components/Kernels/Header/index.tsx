import { createRef, useEffect, useMemo, useRef, useState } from 'react';

import Button from '@oracle/elements/Button';
import Circle from '@oracle/elements/Circle';
import ClickOutside from '@oracle/components/ClickOutside';
import FlexContainer from '@oracle/components/FlexContainer';
import FlyoutMenu, { FlyoutMenuItemType } from '@oracle/components/FlyoutMenu';
import Spacing from '@oracle/elements/Spacing';
import Text from '@oracle/elements/Text';
import useKernel, { UseKernelType } from '@utils/models/kernel/useKernel';
import { SHARED_FILE_HEADER_BUTTON_PROPS } from '@components/PipelineDetail/FileHeaderMenu/constants';
import { UNIT } from '@oracle/styles/units/spacing';

function KernelHeader({
  refreshInterval = 12000,
  revalidateOnFocus = true,
  showError,
}: UseKernelType) {
  const buttonRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const {
    fetch,
    health,
    interrupt,
    kernel,
    restart,
  } = useKernel({
    checkExecutionState: true,
    refreshInterval,
    revalidateOnFocus,
    showError,
  });

  const items = useMemo(() => [
    {
      onClick: () => restart(),
      uuid: 'Restart kernel',
    },
    {
      onClick: () => interrupt(),
      uuid: 'Interrupt kernel',
    },
    {
      onClick: () => fetch(),
      uuid: 'Get latest status',
    },
    {
      isGroupingTitle: true,
      label: () => (
        <FlexContainer flexDirection="column">
          <Text default monospace small>
            Latency: {Math.round(health?.latency * 10000) / 10000}s
          </Text>
          <Text default monospace small>
            Test duration: {health?.timeBetween}s
          </Text>
          <Text default monospace small>
            Time since test: {Math.round((Number(new Date()) - health?.timeLastTest) / 1000)}s
          </Text>
          <Spacing mb={1} />
        </FlexContainer>
      ),
      uuid: 'Health',
    }
  ], [
    fetch,
    health,
    restart,
    interrupt,
  ]);

  return (
    <ClickOutside
      onClickOutside={() => setHighlightedIndex(null)}
      open
      style={{
        height: '100%',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ position: 'relative' }}>
        <Button
          beforeIcon={<Circle danger={!kernel?.alive} size={1 * UNIT} success={kernel?.alive} />}
          compact
          onClick={() => setHighlightedIndex(val => val === 0 ? null : 0)}
          onMouseEnter={() => setHighlightedIndex(val => val !== null ? 0 : null)}
          ref={buttonRef}
          secondary
          small
        >
          <Text monospace noWrapping small>
            {kernel?.name} {kernel?.alive ? 'alive' : 'dead'}
          </Text>
        </Button>

        <FlyoutMenu
          items={items}
          onClickCallback={() => setHighlightedIndex(null)}
          open={highlightedIndex === 0}
          parentRef={buttonRef}
          uuid="KernelHeader"
          width={180}
        />
      </div>
    </ClickOutside>
  );
}

export default KernelHeader;
import { InstructionIconOne } from '@/components/icons/instruction/instruction-one';
import { InstructionIconTwo } from '@/components/icons/instruction/instruction-two';
import { InstructionIconThree } from '@/components/icons/instruction/instruction-three';
import { InstructionIconFour } from '@/components/icons/instruction/instruction-four';

export const instructions = [
  {
    title: 'Only the finest',
    description:
      'At Headout, you only find the best. We do the hard work so you don’t have to.',
    icon: (
      <InstructionIconOne />
    ),
  },
  {
    title: 'Greed is good',
    description:
      'With quality, you also get lowest prices, last-minute availability and 24x7 support.',
    icon: (
      <InstructionIconTwo />
    ),
  },
  {
    title: 'Experience every flavour',
    description:
      'Offbeat or mainstream, a tour or a show, a game or a museum - we have ‘em all.',
    icon: (
      <InstructionIconThree />
    ),
  },
  {
    title: 'No pain, only gain',
    description:
      'Didn’t love it? We’ll give you your money back. Not cocky, just confident.',
    icon: (
      <InstructionIconFour />
    ),
  },
];
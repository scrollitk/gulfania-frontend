import Image from 'next/image';
import RevealContent from '@/components/ui/revel-content';
import Section from '@/components/ui/section';
import { EquipmentsTypes } from '@/types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { useState } from 'react';
import styles from './equipmentStyle.module.css';
import './checkstyle.css';

interface EquipmentTypes {
  equipment: any;
}

export default function EquipmentBlock({ equipment }: EquipmentTypes) {
  return (
    <Section
      className="py-5 pt-2 xl:py-7"
      title="On Board Equipment"
      titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-2"
    >
      <Accordion open={true}>
        <AccordionHeader>Highlights</AccordionHeader>
        <AccordionBody>
          <div
            className={styles['custom-list']}
            dangerouslySetInnerHTML={{ __html: equipment.highlights }}
          ></div>
        </AccordionBody>
      </Accordion>
      <Accordion open={true}>
        <AccordionHeader>Inclusions</AccordionHeader>
        <AccordionBody>
          <div
            className={styles['custom-list']}
            dangerouslySetInnerHTML={{ __html: equipment.inclusions }}
          ></div>
        </AccordionBody>
      </Accordion>
      <Accordion open={true}>
        <AccordionHeader>Exclusions</AccordionHeader>
        <AccordionBody>
          <div
            className={styles['custom-list']}
            dangerouslySetInnerHTML={{ __html: equipment.exclusions }}
          ></div>
        </AccordionBody>
      </Accordion>
      <Accordion open={true}>
        <AccordionHeader>Cancellation Policy</AccordionHeader>
        <AccordionBody>
          <div
            className={styles['custom-list']}
            dangerouslySetInnerHTML={{ __html: equipment.cancellation }}
          ></div>
        </AccordionBody>
      </Accordion>
    </Section>
  );
}

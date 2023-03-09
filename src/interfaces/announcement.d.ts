import { BaseKey } from '@pankod/refine-core';

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    announcementType: string,
}

export interface PropertyCardProps {
  id?: BaseKey | undefined,
  title: string,
  photo: string,
}

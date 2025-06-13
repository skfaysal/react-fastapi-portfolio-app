import { Blog } from '../../types/api';

export interface BlogItemProps {
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
  date?: string;
}

export type { Blog };

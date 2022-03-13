import { Segment } from './segment';
import { Document } from './document';
export interface IndexEntry extends Partial<Segment> {
    segments?: IndexEntry[];
    documents?: Partial<Document>[];
}

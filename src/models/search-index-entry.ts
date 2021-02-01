import { Document } from './document';

export interface SearchIndexEntry extends Partial<Document> {
    extract: string;
}

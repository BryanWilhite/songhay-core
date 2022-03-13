/**
 * Generic Web Publication Item
 * @export
 */
export interface PublicationItem {
    /**
     * Client identifier
     */
    clientId?: string;
    /**
     * is this instance active?
     */
    isActive?: boolean | null;
}

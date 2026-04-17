export type NewEntity<T extends { id: unknown }> = Omit<T, 'id'>;

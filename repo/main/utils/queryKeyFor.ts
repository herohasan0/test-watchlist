interface QueryKey {
  operation: string;
  resourceType?: string;
  resourceId?: number;
  params: Record<string, any>;
}

export function queryKeyFor({
  operation,
  resourceType,
  resourceId,
  params,
}: QueryKey): [
  string,
  string | undefined,
  number | undefined,
  Record<string, any>
] {
  return [operation, resourceType, resourceId, params];
}

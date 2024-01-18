'use client';

export default function Error({ error }: { error: string }) {
  return <p>Fetching meals failed: {error}</p>;
}

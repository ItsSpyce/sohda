import axios from 'axios';
import { Mix } from 'sohda-api';
import { parseUrl } from '../utils';
import * as notifications from '../notifications';

export async function fetchFeaturedMixes(): Promise<Mix[]> {
  if (!(await isConnected())) {
    return [];
  }
  try {
    const result = await axios.get<Mix[]>(parseUrl('mixes/featured'));
    if (result.status !== 200) {
      throw new Error(result.statusText);
    }
    return result.data;
  } catch (err) {
    notifications.error(`Failed to fetch featured mixes: ${err}`);
    return [];
  }
}

export async function fetchRelatedMixes(): Promise<Mix[]> {
  if (!(await isConnected())) {
    return [];
  }
  try {
    const result = await axios.get<Mix[]>(parseUrl('mixes/related'));
    if (result.status !== 200) {
      throw new Error(result.statusText);
    }
    return result.data;
  } catch (err) {
    notifications.error(`Failed to fetch related mixes: ${err}`);
    return [];
  }
}

export async function fetchMixes(
  page: number = 1,
  filter: any = {}
): Promise<Mix[]> {
  if (!(await isConnected())) {
    return [];
  }
  try {
    const result = await axios.get<Mix[]>(
      parseUrl('mixes/search', { page, ...filter })
    );
    if (result.status !== 200) {
      throw new Error(result.statusText);
    }
    return result.data;
  } catch (err) {
    notifications.error(`Failed to fetch mixes: ${err}`);
    return [];
  }
}

export async function isConnected() {
  return false;
}

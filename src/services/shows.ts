import { apiFetch } from './api';

export interface ShowCountry {
  name: string;
  code: string;
  timezone: string;
}

export interface ShowChannel {
  id: number;
  name: string;
  country: ShowCountry | null;
  officialSite: string | null;
}

export interface ShowImage {
  medium: string;
  original: string;
}

export interface ShowLink {
  href: string;
  name?: string;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string | null;
  language: string | null;
  genres: string[];
  status: string | null;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: ShowChannel | null;
  webChannel: ShowChannel | null;
  dvdCountry: ShowCountry | null;
  externals: Record<string, number | string | null>;
  image: ShowImage | null;
  summary: string | null;
  updated: number;
  _links: Record<string, ShowLink>;
}

export function getSeries(): Promise<Show[]> {
  return apiFetch('/shows');
}

export function getSerieById(id: string): Promise<Show> {
  return apiFetch(`/shows/${id}`);
}

export function getElencoById(id: string): Promise<any[]> {
  return apiFetch(`/shows/${id}/cast`);
}

export function getEpisodiosById(id: string): Promise<any[]> {
  return apiFetch(`/shows/${id}/episodes`);
}

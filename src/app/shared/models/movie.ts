export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  trailerUrl?: string;
  boxOffice?: number;
  isActive?: boolean;
}

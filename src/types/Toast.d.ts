export interface Toast {
  id?: number;
  message?: string;
  preset?: 'success' | 'error';
  showClose?: boolean;
}

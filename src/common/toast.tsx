import { toast } from 'react-toastify';
import { ToastMessage } from '@/components';

export function ToastSucess(content: string) {
  toast(<ToastMessage type='SUCESS' message={content} />);
}

export function ToastError(content: string) {
  toast(<ToastMessage type='ERROR' message={content} />);
}

export function ToastWarning(content: string) {
  toast(<ToastMessage type='WARNING' message={content} />);
}

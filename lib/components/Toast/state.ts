import { generateID } from "../../utils/genRandomId";
import { ToastTypes } from "./types";

class ToastObservable {
  subscribers: Array<(toast: ToastTypes[]) => void>;
  toasts: Set<ToastTypes>;
  constructor() {
    this.subscribers = [];
    this.toasts = new Set();
  }
  subscribe(subscriber: (toast: ToastTypes[]) => void) {
    this.subscribers.push(subscriber);
    return () => {
      const index = this.subscribers.indexOf(subscriber);
      this.subscribers.splice(index, 1);
    };
  }
  unsubscribe(fn: (toast: ToastTypes[]) => void) {
    this.subscribers.filter((func) => func !== fn);
  }
  notify(data: ToastTypes) {
    this.toasts.add(data);
    this.subscribers.forEach((fn) => fn([...this.toasts]));
  }
  remove(id: number) {
    this.toasts = new Set([...this.toasts].filter((item) => item.id !== id));
  }
}

const defaultType = "information";
const defaultDuration = 3000;

export const ToastInstance = new ToastObservable();

const toast = ({
  id = generateID(),
  duration = defaultDuration,
  type = defaultType,
  content,
}: ToastTypes) => {
  ToastInstance.notify({ id, duration, type, content });
};

export { toast };

import { readable, writable } from "svelte/store";

export const emailPattern = readable(/^([A-Za-z])([A-Za-z0-9_.]){1,254}@([A-Za-z])([A-Za-z0-9_.]){1,255}\.([a-z]){2,6}$/);
import os from 'os';

/**
 * Retrieves the hostname of the operating system.
 * The hostname is the name assigned to the device on a network.
 * 
 * @returns The hostname of the machine as a string.
 */
export const Hostname = (): string => os.hostname();

/**
 * Retrieves the amount of free memory (RAM) available on the system.
 * The free memory is converted from bytes to gigabytes (GB) for easier readability.
 * 
 * @returns The available RAM in gigabytes (GB), rounded to two decimal places.
 */
export const AvailableRAM = (): string => `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`;

/**
 * Retrieves the total amount of RAM (physical memory) installed in the system.
 * The total memory is converted from bytes to gigabytes (GB) for easier readability.
 * 
 * @returns The total RAM in gigabytes (GB), rounded to two decimal places.
 */
export const DeviceRAM = (): string => `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`;

/**
 * Retrieves the home directory of the current user.
 * The home directory is typically the user's personal folder where files are stored.
 * 
 * @returns The path to the user's home directory.
 */
export const UserDirectory = (): string => os.homedir();

/**
 * Retrieves the username of the currently logged-in user.
 * This is useful for identifying the active user session on the system.
 * 
 * @returns The username of the current user as a string.
 */
export const User = (): string => os.userInfo().username;

/**
 * Retrieves the operating system name (e.g., 'Linux', 'Darwin', 'Windows').
 * This helps to identify the OS type in use on the system.
 * 
 * @returns The operating system name.
 */
export const OSType = (): string => os.type();

/**
 * Retrieves the platform on which the Node.js process is running.
 * The platform value is typically one of 'linux', 'win32', 'darwin', etc.
 * 
 * @returns The platform of the operating system.
 */
export const OS = (): string => os.platform();

/**
 * Retrieves the network interfaces available on the system.
 * This returns details about the system's network interfaces (e.g., Ethernet, Wi-Fi).
 * 
 * @returns A dictionary containing the network interfaces and their details.
 */
export const NetworkInterfaces = (): NodeJS.Dict<os.NetworkInterfaceInfo[]> => os.networkInterfaces();

/**
 * Retrieves the number of logical CPU cores available on the system.
 * This is useful for understanding the system's processing capabilities.
 * 
 * @returns The number of logical CPU cores.
 */
export const CPUCount = (): number => os.cpus().length;

/**
 * Retrieves the system uptime in seconds.
 * The uptime is the time since the system was last booted, indicating system activity.
 * 
 * @returns The system uptime in seconds.
 */
export const Uptime = (): number => os.uptime();

/**
 * Retrieves the architecture of the operating system.
 * This can be 'x64' (64-bit) or 'x86' (32-bit) depending on the machine.
 * 
 * @returns The system's architecture (e.g., 'x64', 'x86').
 */
export const OSArchitecture = (): string => os.arch();

import { fileURLToPath } from "node:url";

export const COMPUTER_USE_HELPER_COMMAND = "agentdock-computer-use-helper";

export function resolveComputerUseHelperPath(
  override = process.env.COMPUTER_USE_HELPER_PATH,
): string {
  return (
    override ??
    fileURLToPath(new URL("../native/target/release/agentdock-computer-use-helper", import.meta.url))
  );
}

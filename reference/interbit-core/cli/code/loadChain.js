const hypervisor = interbit.createHypervisor()
const cli = interbit.createCli(hypervisor)

const chainInterface = await cli.loadChain('md90ewuejr09emeowqw3iowejq03meow9i0w9e')

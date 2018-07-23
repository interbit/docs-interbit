const hypervisor = interbit.createHypervisor()
const cli = interbit.createCli(hypervisor)

const chainId = 'ap9oedirqaw90opeuridjqaioi8uhy9ioyhepqa'

if (cli.destroyChain(chainId)) {
  // ... success
}

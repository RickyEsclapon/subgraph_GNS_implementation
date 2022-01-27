import {
  NSignalMinted as NSignalMintedEvent,
  NSignalBurned as NSignalBurnedEvent,
  GRTWithdrawn as GRTWithdrawnEvent,
  SubgraphDeprecated as SubgraphDeprecatedEvent,
  SubgraphMetadataUpdated as SubgraphMetadataUpdatedEvent,
  SubgraphPublished as SubgraphPublishedEvent
} from "../generated/GNS/GNS"
import {
  NSignalMinted,
  NSignalBurned,
  GRTWithdrawn,
  SubgraphDeprecated,
  SubgraphMetadataUpdated,
  SubgraphPublished
} from "../generated/schema"

export function handleNSignalMinted(event: NSignalMintedEvent): void {
  let entity = new NSignalMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.nameCurator = event.params.nameCurator
  entity.nSignalCreated = event.params.nSignalCreated
  entity.vSignalCreated = event.params.vSignalCreated
  entity.tokensDeposited = event.params.tokensDeposited
  entity.save()
}

export function handleNSignalBurned(event: NSignalBurnedEvent): void {
  let entity = new NSignalBurned(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.nameCurator = event.params.nameCurator
  entity.nSignalBurnt = event.params.nSignalBurnt
  entity.vSignalBurnt = event.params.vSignalBurnt
  entity.tokensReceived = event.params.tokensReceived
  entity.save()
}

export function handleGRTWithdrawn(event: GRTWithdrawnEvent): void {
  let entity = new GRTWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.nameCurator = event.params.nameCurator
  entity.nSignalBurnt = event.params.nSignalBurnt
  entity.withdrawnGRT = event.params.withdrawnGRT
  entity.save()
}

export function handleSubgraphDeprecated(event: SubgraphDeprecatedEvent): void {
  let entity = new SubgraphDeprecated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.save()
}

export function handleSubgraphMetadataUpdated(
  event: SubgraphMetadataUpdatedEvent
): void {
  let entity = new SubgraphMetadataUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.subgraphMetadata = event.params.subgraphMetadata
  entity.save()
}

export function handleSubgraphPublished(event: SubgraphPublishedEvent): void {
  let entity = new SubgraphPublished(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.graphAccount = event.params.graphAccount
  entity.subgraphNumber = event.params.subgraphNumber
  entity.subgraphDeploymentID = event.params.subgraphDeploymentID
  entity.versionMetadata = event.params.versionMetadata
  entity.save()
}

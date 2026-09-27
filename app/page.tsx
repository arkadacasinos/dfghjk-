import { NqxMast } from '@/components/nqx-mast'
import { NqxHero } from '@/components/nqx-hero'
import {
  NqxCabinet,
  NqxOfficialSite,
  NqxOfficial,
  NqxMirror,
} from '@/components/nqx-band-a'
import {
  NqxWorkingMirror,
  NqxMirrorCopy,
  NqxPlay,
  NqxPlayLive,
  NqxOnline,
} from '@/components/nqx-band-b'
import {
  NqxMixedName,
  NqxShortName,
  NqxOfficialContour,
  NqxOfficialHome,
} from '@/components/nqx-band-c'
import { NqxFoot } from '@/components/nqx-foot'

export default function Page() {
  return (
    <>
      <a className="nqx-skip" href="#nqx-main">
        К содержанию
      </a>
      <NqxMast />
      <main className="nqx-flow" id="nqx-main">
        <NqxHero />
        <NqxCabinet />
        <NqxOfficialSite />
        <NqxOfficial />
        <NqxMirror />
        <NqxWorkingMirror />
        <NqxMirrorCopy />
        <NqxPlay />
        <NqxPlayLive />
        <NqxOnline />
        <NqxMixedName />
        <NqxShortName />
        <NqxOfficialContour />
        <NqxOfficialHome />
      </main>
      <NqxFoot />
    </>
  )
}

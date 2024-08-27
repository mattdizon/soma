import * as trpcNext from '@trpc/server/adapters/next';
import { router } from '~/server/trpc';
import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import axios from 'axios';
import { RocketType } from '~/components/Rocket';
import { MissionType } from '~/components/MissionInfo';
import { LaunchPadType } from '~/components/LaunchPad';

const t = initTRPC.create();

const appRouter = router({
  getRockets: t.procedure.query(async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data as RocketType[];
  }),
  getMissions: t.procedure
  .input(
    z.object({
      id: z.string().nullable(),
      limit: z.number().optional(),
      offset: z.number().optional(),
    })
  )
  .query(async ({ input }) => {
    const { id, limit = 10, offset = 0 } = input;
    const url = id === null
      ? `https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`
      : `https://api.spacexdata.com/v3/launches?rocket_id=${id}&limit=${limit}&offset=${offset}`;

    const response = await axios.get(url);
    return response.data as MissionType[];
  }),
  getLaunchPads: t.procedure.query(async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/launchpads');
    return response.data as LaunchPadType[];
}),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});

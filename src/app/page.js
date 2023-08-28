"use client";
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating defaultValue={0} size="lg" />

      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        radius="sm"
        size="sm"
        mt="xs"
        minRows={3}
      />

      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider size="xs" mt="sm" />
      <Group mt="sm" position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating defaultValue={5} size="sm" />
      </Group>
      <Text fz="md" color="gray" align="center" c="dimmed" fw={400}>
        Best pizza in this world. I give you X score.
      </Text>

      <Divider size="xs" mt="sm" />
      <Group mt="sm" position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating defaultValue={4} size="sm" />
      </Group>

      <Text color="gray" fz="md" fw={400} align="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination position="center" total={20} color="orange" mt="md" />

      <Text align="center" color="dimmed" my="xs" mt="md">
        Copyright © 2023 Nattapoom Pothongsunun 650610761
      </Text>
    </Container>
  );
}
